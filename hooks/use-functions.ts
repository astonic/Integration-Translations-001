"use client";

// Mock data - replace with actual API calls
const mockFunctions = [
  { id: 1, functionCode: 'USER_MGMT', description: 'User Management Functions' },
  { id: 2, functionCode: 'REPORT_GEN', description: 'Report Generation' },
  { id: 3, functionCode: 'DATA_EXPORT', description: 'Data Export Functions' },
];

export function useFunctions() {
  // In a real app, this would fetch from an API
  return {
    functions: mockFunctions,
    isLoading: false,
    error: null
  };
}