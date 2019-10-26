import { omitBy, isNil } from 'lodash'

export function omitNil(object): any {
  return omitBy(object, isNil)
}

export function removeDefaultAvatarSize(src?: string): string {
  /* istanbul ignore if */
  if (!src) {
    return src
  }
  return src.replace(/\?s=.*$/, '')
}
