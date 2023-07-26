import jwt_decode from 'jwt-decode'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const jwt = ref()
    const expireDate = ref<Date>()
    const userId = ref<string>()

    function signOut() {
      const router = useRouter()
      reset()
      router.push('/')
    }

    function signIn(passedJwt: string) {
      const router = useRouter()
      jwt.value = passedJwt
      router.push('/dashboard')
    }

    function decodeJwt() {
      const decodedJwt = jwt_decode(jwt.value)
      return decodedJwt
    }

    function reset() {
      jwt.value = ''
      expireDate.value = undefined
      userId.value = ''
    }

    function checkJwt() {
      return isJWTValid(jwt.value)
    }

    return {
      jwt,
      signOut,
      signIn,
      decodeJwt,
      reset,
      checkJwt,
    }
  },
  {
    persist: true,
  },
)

function isJWTValid(token) {
  if (typeof token !== 'string')
    return false

  const parts = token.split('.')
  if (parts.length !== 3)
    return false

  const header = JSON.parse(atob(parts[0]))
  const payload = JSON.parse(atob(parts[1]))

  if (typeof header !== 'object' || typeof payload !== 'object')
    return false

  if (typeof header.alg === 'undefined')
    return false

  const currentTimestamp = Math.floor(Date.now() / 1000)

  if (typeof payload.exp !== 'undefined' && payload.exp < currentTimestamp)
    return false

  return true
}
