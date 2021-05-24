import { F1 } from './data-source'

export class SeasonsData extends F1 {
  // eslint-disable-next-line no-useless-constructor
  constructor () {
    super()
  }

  async getSeasons () {
    return await this.get('seasons.json?limit=80', {
      cacheOptions: { ttl: 60 }
    })
  }
}
