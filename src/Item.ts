export class Item {
  name: string
  sellIn: number
  quality: number

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  public age() {
    if (this.name == "Aged Brie") {
      if (this.isQualityBelow(50)) {
        this.incrementQualityByOne()
      }
    } else if (this.name == "Backstage passes to a TAFKAL80ETC concert") {
      if (this.isQualityBelow(50)) {
        this.incrementQualityByOne()
        if (this.sellIn < 11) {
          if (this.isQualityBelow(50)) {
            this.incrementQualityByOne()
          }
        }
        if (this.sellIn < 6) {
          if (this.isQualityBelow(50)) {
            this.incrementQualityByOne()
          }
        }
      }
    } else {
      if (this.quality > 0) {
        if (this.name == "Sulfuras, Hand of Ragnaros") return
        this.decrementQualityByOne()
      }
    }
    if (this.name != "Sulfuras, Hand of Ragnaros") {
      this.sellIn = this.sellIn - 1
    }
    if (this.sellIn < 0) {
      if (this.name == "Aged Brie") {
        if (this.isQualityBelow(50)) {
          this.incrementQualityByOne()
          return
        }
        return
      }
      if (this.name == "Backstage passes to a TAFKAL80ETC concert") {
        this.decrementQualityToZero()
        return
      }
      if (this.quality > 0) {
        if (this.name == "Sulfuras, Hand of Ragnaros") return
        this.decrementQualityByOne()
      }
    }
  }

  private isQualityBelow(targetQuality: number) {
    return this.quality < targetQuality
  }

  private decrementQualityToZero() {
    this.quality = this.quality - this.quality
  }

  private decrementQualityByOne() {
    this.quality = this.quality - 1
  }

  private incrementQualityByOne() {
    this.quality = this.quality + 1
  }
}
