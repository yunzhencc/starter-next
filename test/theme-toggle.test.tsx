import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ThemeToggle } from '@/components/theme-toggle';

const { setTheme, useTheme } = vi.hoisted(() => ({
  setTheme: vi.fn(),
  useTheme: vi.fn(),
}));

vi.mock('next-themes', () => ({
  useTheme,
}));

describe('theme toggle', () => {
  beforeEach(() => {
    setTheme.mockReset();
  });

  it('switches from light to dark', () => {
    useTheme.mockReturnValue({ resolvedTheme: 'light', setTheme });

    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole('button', { name: '切换至深色主题' }));

    expect(setTheme).toHaveBeenCalledWith('dark');
  });

  it('switches from dark to light', () => {
    useTheme.mockReturnValue({ resolvedTheme: 'dark', setTheme });

    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole('button', { name: '切换至浅色主题' }));

    expect(setTheme).toHaveBeenCalledWith('light');
  });
});
