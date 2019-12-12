import { LAYOUT } from '@/constants'
export default ({ hiddenList = [], dataList = {} }) => {
  let data: any = {
    id: '_id',
    props: {
      ...LAYOUT.formItemLayout
    },
    data: [
      {
        type: 'treeSelect',
        title: '父级菜单',
        name: 'parentId',

        options: {
          initialValue: '0',
          rules: [{ required: true, message: '父菜单不可为空' }]
        },
        props: {
          placeholder: '请选择父级菜单',
          treeDefaultExpandAll: true
        }
      },
      {
        type: 'input',
        title: '菜单名称',
        name: 'text',
        options: {
          initialValue: '',
          rules: []
        },
        props: {
          placeholder: '请输入菜单名称'
        }
      },
      {
        type: 'input',
        title: '菜单链接',
        name: 'link',
        options: {
          initialValue: '',
          rules: []
        },
        props: {
          placeholder: '请输入菜单链接'
        }
      },
      {
        type: 'input',
        title: '菜单图标',
        name: 'icon',
        options: {
          initialValue: '',
          rules: []
        },
        props: {
          placeholder: '请输入菜单图标'
        }
      },
      {
        type: 'switch',
        title: '状态',
        name: 'status',
        options: {
          initialValue: true,
          valuePropName: 'checked',
          rules: []
        },
        props: {
          checkedChildren: '开启',
          unCheckedChildren: '关闭'
        }
      },
      {
        type: 'inputNumber',
        title: '排序',
        name: 'sort',
        options: {
          initialValue: 0,
          rules: []
        },
        props: {}
      }
    ]
  }

  // 隐藏
  if (hiddenList.length > 0) {
    data.data = data.data.filter((v: any) => !hiddenList.includes(v.name))
  }

  // 加数据
  data.data = data.data.map((v: any) => {
    for (let i in dataList) {
      if (i === v.name) {
        v.dataList = dataList[i]
      }
    }
    return v
  })

  return data
}
