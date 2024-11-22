import { createAppKit } from '@reown/appkit'
import {  networks } from '@/config'

const projectId = process.env['NEXT_PUBLIC_PROJECT_ID'] || 'default_project_id'

// 2. Create the AppKit instance
export const provider = createAppKit({
  networks: networks,
  projectId: projectId,
})