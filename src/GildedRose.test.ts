import { describe, it, expect } from "vitest"
import { GildedRose } from "./GildedRose.js"
import { Item } from "./Item.js"

describe("GildedRose", () => {
  const itemNames = ["Apple", "Aged Brie", "Sulfuras, Hand of Ragnaros", "Backstage passes to a TAFKAL80ETC concert"]
  for (const name of itemNames) {
    for (let sellIn = -2; sellIn <= 10; sellIn++) {
      for (let quality = -2; quality <= 51; quality++) {
        const item = new Item(name, sellIn, quality)

        it(JSON.stringify(item), () => {
          const sut = new GildedRose([item])
          const items = sut.updateQuality()

          expect(items[0]).toMatchSnapshot()
        })
      }
    }
  }
})
