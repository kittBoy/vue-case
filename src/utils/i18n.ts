// translate router.meta.title, be used in breadcrumb sidebar tagsview
export function generateTitle(self: any, title: string): any {
  const hasKey = self.$te('route.' + title)
  const translatedTitle = self.$t('route.' + title) // $t :this method from vue-i18n, inject in @/lang/index.js

  if (hasKey) {
    return translatedTitle
  }
  return title
}
