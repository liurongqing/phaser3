export const blockLevelAnchors = (data: any) => {
  const data1 = []
  data1[0] = data[0]

  let tmp = []
  for (let i = 1; i < data.length; i++) {
    if (data1[0].level === data[i].level) {
      if (tmp.length > 0) {
        data1[data1.length - 1].children = blockLevelAnchors(tmp)
        tmp = []
      }
      data1.push(data[i])
    } else {
      tmp.push(data[i])
    }
  }

  if (tmp.length > 0) {
    data1[data1.length - 1].children = blockLevelAnchors(tmp)
    tmp = []
  }
  return data1
}
