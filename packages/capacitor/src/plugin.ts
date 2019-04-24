import { Plugins } from '@capacitor/core'

class Ad {
  private static _nextId = 0

  private static nextId = () => {
    Ad._nextId += 1
    return Ad._nextId
  }

  public readonly adUnitId: string

  public readonly childDirected?: boolean

  public readonly nonPersonalizedAds: boolean

  public readonly testDevices: string[]

  protected readonly id: number

  constructor(options: {
    adUnitId: string;
    childDirected?: boolean;
    nonPersonalizedAds?: boolean;
    testDevices?: string[];
  }) {
    this.id = Ad.nextId()
    this.adUnitId = options.adUnitId
    this.childDirected = options.childDirected
    this.nonPersonalizedAds = options.nonPersonalizedAds || true
    this.testDevices = options.testDevices || []
  }
}

export class InterstitialAd extends Ad {
  public load() {
    return Plugins.AdmobPlus.interstitial_load({
      adUnitId: this.adUnitId,
      childDirected: this.childDirected,
      id: this.id,
      nonPersonalizedAds: this.nonPersonalizedAds,
      testDevices: this.testDevices,
    })
  }

  public show() {
    return Plugins.AdmobPlus.interstitial_show({ id: this.id })
  }
}
