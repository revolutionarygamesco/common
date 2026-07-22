import { describe, expect, it, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { loadYaml } from './yaml.ts'

vi.mock('node:fs', async importOriginal => ({
  ...await importOriginal<typeof import('node:fs')>(),
  readFileSync: vi.fn()
}))

describe('loadYaml', () => {
  it('loads YAML', () => {
    vi.mocked(readFileSync).mockReturnValue('id: abc123\nname: Test File')
    const { id, name } = loadYaml<{ id: string, name: string }>('./test.yaml')
    expect(id).toBe('abc123')
    expect(name).toBe('Test File')
  })
})
