class CoreHelper {
  /** Get array từ obj */
  convertObjToArray(obj: any): any[] {
    return Object.values(obj || {})
  }

  /**
   * Hàm Convert array to object (HashMap) [{id,name}] => {id:{id,name}}
   *
   * @author senhoang
   * @param {array} arr  - List Array muốn convert to hash map.
   * @param {string} key - Key để làm key trong hash map(mặc định là id)
   */
  arrayToObject(arr: any[], key: string = 'id') {
    return arr.reduce((a, v) => (a[v[key]] ? { ...a, [v[key]]: { ...a[v[key]], ...v } } : { ...a, [v[key]]: v }), {})
  }

  newDateTZ() {
    const d = new Date()
    const offset = 7
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    const utc = d.getTime() + d.getTimezoneOffset() * 60000

    // create new Date object for different city
    // using supplied offset
    const nd = new Date(utc + 3600000 * offset)
    return nd
  }

  /** Lấy 1 arr gồm 1 trường data không trùng */
  selectDistinct(arr: any[], field: string) {
    if (!arr?.length) return []
    const set = new Set<string>()
    for (const item of arr) if (item[field]) set.add(item[field])
    return [...set]
  }

  convertVietnameseString(input: string): string {
    const map: { [key: string]: string } = {
      á: 'a',
      à: 'a',
      ả: 'a',
      ã: 'a',
      ạ: 'a',
      ă: 'a',
      ắ: 'a',
      ằ: 'a',
      ẳ: 'a',
      ẵ: 'a',
      ặ: 'a',
      â: 'a',
      ấ: 'a',
      ầ: 'a',
      ẩ: 'a',
      ẫ: 'a',
      ậ: 'a',
      đ: 'd',
      é: 'e',
      è: 'e',
      ẻ: 'e',
      ẽ: 'e',
      ẹ: 'e',
      ê: 'e',
      ế: 'e',
      ề: 'e',
      ể: 'e',
      ễ: 'e',
      ệ: 'e',
      í: 'i',
      ì: 'i',
      ỉ: 'i',
      ĩ: 'i',
      ị: 'i',
      ó: 'o',
      ò: 'o',
      ỏ: 'o',
      õ: 'o',
      ọ: 'o',
      ô: 'o',
      ố: 'o',
      ồ: 'o',
      ổ: 'o',
      ỗ: 'o',
      ộ: 'o',
      ơ: 'o',
      ớ: 'o',
      ờ: 'o',
      ở: 'o',
      ỡ: 'o',
      ợ: 'o',
      ú: 'u',
      ù: 'u',
      ủ: 'u',
      ũ: 'u',
      ụ: 'u',
      ư: 'u',
      ứ: 'u',
      ừ: 'u',
      ử: 'u',
      ữ: 'u',
      ự: 'u',
      ý: 'y',
      ỳ: 'y',
      ỷ: 'y',
      ỹ: 'y',
      ỵ: 'y',
    }

    return input
      .toLowerCase() // uppercase
      .replace(/\s+/g, '') // Loại bỏ dấu cách
      .split('')
      .map((char) => map[char] || char)
      .join('')
      .toUpperCase()
  }
}

export const coreHelper = new CoreHelper()
