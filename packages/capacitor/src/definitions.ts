declare global {
  interface PluginRegistry {
    AdmobPlus?: AdmobPlusPlugin
  }
}
export interface LoadAdOptions {
  id: number
  adUnitId: string
  childDirected?: boolean
  nonPersonalizedAds: boolean
  testDevices?: string[]
}

export interface AdmobPlusPlugin {
  echo(options: { value: string }): Promise<{ value: string }>
  interstitial_load(options: LoadAdOptions): Promise<void>
  interstitial_show(options: { id: number }): Promise<void>
}
