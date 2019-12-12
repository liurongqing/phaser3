export default {
  current: 1, // 当前页数
  pageSize: 20, // 每页条数
  pageSizeOptions: ['10', '20', '50', '100'], // 每页显示条数
  showSizeChanger: true, // 是否可以改变 pageSize
  showQuickJumper: true, // 是否可以跳转某页
  size: '', // 显示页尺寸 可选： '' 或 small
  hideOnSinglePage: false, // 只有一页时是否展示
  showTotal: (total: number) => {
    return `共 ${total} 条数据 `
  }, // 总数显示样子
  total: 0 // 总数
}
