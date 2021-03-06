import Button from '@/common/components/Button'
import PrivateRoute from '@/modules/auth/components/PrivateRoute'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import AccountSettingsInformationSection from './AccountSettingsInformationSection'
import AccountSettingSocialSection from './SocialSection'
import AccountSettingsPasswordSection from './AccountSettingsPasswordSection'
import Head from 'next/head'
import { useUserState } from '@/common/providers/UserProvider'
import Image from 'next/image'

const AccountSettingPage = () => {
  const userState = useUserState()

  return (
    <PrivateRoute>
      {userState.state === 'authenticated' && (
        <>
          <Head>
            <title>Account Setting - zydhan.com</title>
          </Head>
          <div className="w-full flex flex-col pb-10 gap-y-3 items-center sm:flex-row justify-between align-middle">
            <h2 className="text-2xl">Account Setting</h2>
            <div className="w-24 text-sm">
              <Button onClick={() => window.history.back()}>
                <FontAwesomeIcon
                  className="my-auto mr-2"
                  icon={faCircleArrowLeft}
                ></FontAwesomeIcon>{' '}
                Back
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 sm:flex-row sm:gap-x-5">
            <div className="sm:w-64 sm:h-fit flex flex-col w-full shadow-sm bg-white dark:shadow-none dark:bg-transparent dark:border dark:border-white/20 rounded p-6 justify-center text-center gap-y-5 break-words text-ellipsis overflow-hidden">
              <>
                {userState.user.avatar_url ? (
                  <div className="w-16 h-16 m-auto">
                    <Image
                      className="h-8 w-8 rounded-full dark:bg-white transition duration-150 ease-in-out"
                      src={userState.user.avatar_url}
                      width={64}
                      height={64}
                      alt="User profile picture"
                    />
                  </div>
                ) : (
                  <FontAwesomeIcon icon={faCircleUser} size={'4x'} />
                )}
                <div>
                  <p className="text-lg">{userState.user.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {userState.user.email}
                  </p>
                </div>
              </>
            </div>

            <div className="sm:w-full flex flex-col gap-y-5">
              <AccountSettingsInformationSection user={userState.user} />
              <AccountSettingSocialSection user={userState.user} />
              <AccountSettingsPasswordSection />
            </div>
          </div>
        </>
      )}
    </PrivateRoute>
  )
}

export default AccountSettingPage
