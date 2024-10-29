"use client";

// Mock data - replace with actual API calls
const mockTranslations = [
  {
    id: 1,
    key1: 'DASHBOARD',
    key2: 'TITLE',
    key3: null,
    key4: null,
    key5: null,
    value: 'Dashboard',
  },
  {
    id: 2,
    key1: 'DASHBOARD',
    key2: 'WELCOME',
    key3: null,
    key4: null,
    key5: null,
    value: 'Welcome to the Dashboard',
  },
];

export function useTranslations(functionId: number) {
  // In a real app, this would fetch from an API based on functionId
  return {
    translations: mockTranslations,
    isLoading: false,
    error: null
  };
}