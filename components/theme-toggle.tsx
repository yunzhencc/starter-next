'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      aria-label={isDark ? '切换至浅色主题' : '切换至深色主题'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      size="icon"
      variant="outline"
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
