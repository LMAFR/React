// @ts-check
import { test, expect } from '@playwright/test';
import { CAT_ENDPOINT_IMAGE_PREFIX } from '../src/endpoints.js';

const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async({ page }) => {
    await page.goto(LOCALHOST_URL);

    const text = await page.getByRole('paragraph')
    const image = await page.getByRole('img')

    const textContent = await text.textContent()
    const imageSrc = await image.getAttribute('src')

    await expect(textContent ? textContent.length : 1).toBeGreaterThan(0)
    await expect(imageSrc.startsWith(CAT_ENDPOINT_IMAGE_PREFIX)).toBeTruthy();
});