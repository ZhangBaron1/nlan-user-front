import request from '@/utils/request'

export function test() {
  return request({
    url: 'api/v1/tests',
    method: 'get'
  })
}

