export interface templateInfo {
  id: number
  /**模版标题 */
  title: string
  /**模版作者 */
  author: string
  /**封面图片 */
  coverImg: string
  /**复制次数 */
  copiedCount: number
}
export interface addInfo {
  uuid: string
  title: string
  desc: string
  coverImg?: string
  copiedCount: number
  user: string | number
  content: Record<string, any>
  author: string
}
