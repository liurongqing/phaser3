import { LAYOUT } from '@/constants'
export default ({ hiddenList = [] }) => {
  let data: any = {
    id: '_id',
    props: {
      ...LAYOUT.formItemLayout
    },
    data: [
      {
        type: 'input',
        title: '帐号',
        name: 'username',
        options: {
          initialValue: '',
          rules: [{ required: true, message: '帐号不可为空' }]
        },
        props: {
          placeholder: '请输入帐号'
        }
      },
      {
        type: 'input',
        title: '昵称',
        name: 'nickname',
        options: {
          initialValue: '',
          rules: []
        },
        props: {
          placeholder: '请输入昵称'
        }
      },
      {
        type: 'inputPassword',
        title: '密码',
        name: 'password',
        options: {
          initialValue: '',
          rules: [{ required: true, message: '密码不可为空' }]
        },
        props: {
          placeholder: '请输入密码'
        }
      }
    ]
  }
  if (hiddenList.length > 0) {
    data.data = data.data.filter((v: any) => !hiddenList.includes(v.name))
  }
  return data
}
