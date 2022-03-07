import React, { FormEventHandler, useReducer, useRef } from 'react'
import Input from '@/common/components/elements/Form/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@/common/components/elements/Button'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import Alert from '@/components/elements/Alert'
import axios from 'axios'

type State =
  | { status: 'PROCESSING' }
  | { status: 'IDLE'; message?: { type: 'ERROR' | 'SUCCESS'; content: string } }
type Action = State

const reducer = (state: State, action: Action): State => action

const PasswordSection = () => {
  const [state, dispatch] = useReducer(reducer, { status: 'IDLE' })
  const currentPasswordRef = useRef<HTMLInputElement>(null)
  const newPasswordRef = useRef<HTMLInputElement>(null)
  const newPasswordConfirmationRef = useRef<HTMLInputElement>(null)

  const handleChangePassword: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    dispatch({ status: 'PROCESSING' })
    try {
      if (!currentPasswordRef.current?.value) {
        dispatch({
          status: 'IDLE',
          message: {
            type: 'ERROR',
            content: 'Current password must be filled',
          },
        })
        return
      }
      if (!newPasswordRef.current?.value) {
        dispatch({
          status: 'IDLE',
          message: {
            type: 'ERROR',
            content: 'New password must be filled',
          },
        })
        return
      }
      if (
        newPasswordRef.current.value !==
        newPasswordConfirmationRef.current?.value
      ) {
        dispatch({
          status: 'IDLE',
          message: {
            type: 'ERROR',
            content: 'Password confirmation must be match',
          },
        })
        return
      }
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/user/change-password`,
        {
          current_password: currentPasswordRef.current.value,
          new_password: newPasswordRef.current.value,
          new_password_confirmation: newPasswordConfirmationRef.current.value,
        },
        {
          withCredentials: true,
        }
      )
      dispatch({
        status: 'IDLE',
        message: { type: 'SUCCESS', content: 'Password changed successfully' },
      })
    } catch (e) {
      if (!axios.isAxiosError(e)) throw e
      dispatch({
        status: 'IDLE',
        message: { type: 'ERROR', content: 'Failed to change password' },
      })
    }
  }

  return (
    <div
      className='sm:col-span-3 flex flex-col
  border border-white/20 rounded px-6 py-5'
    >
      <h3 className='text-lg font-semibold'>Change Password</h3>
      <div className='h-px w-full bg-white/20 mt-3'></div>
      <form
        className='mt-5 flex flex-col gap-y-3'
        onSubmit={handleChangePassword}
      >
        {state.status === 'IDLE' && state.message?.type === 'SUCCESS' && (
          <Alert
            handleClose={() => dispatch({ status: 'IDLE' })}
            text={state.message.content}
            type='success'
          />
        )}
        {state.status === 'IDLE' && state.message?.type === 'ERROR' && (
          <Alert
            handleClose={() => dispatch({ status: 'IDLE' })}
            text={state.message.content}
            type='danger'
          />
        )}
        <div className='grid grid-cols-3'>
          <div className='flex'>
            <label className='my-auto' htmlFor='current_password'>
              Current password
            </label>
          </div>
          <Input
            className='col-span-2'
            placeholder='Current password'
            position='single'
            type='password'
            ref={currentPasswordRef}
            autoComplete='current-password'
          />
        </div>

        <div className='grid grid-cols-3'>
          <div className='flex'>
            <label className='my-auto' htmlFor='new_password'>
              New password
            </label>
          </div>
          <Input
            className='col-span-2'
            placeholder='New password'
            position='single'
            type='password'
            ref={newPasswordRef}
            autoComplete='new-password'
          />
        </div>

        <div className='grid grid-cols-3'>
          <div className='flex'>
            <label className='my-auto' htmlFor='new_password_confirmation'>
              Confirm password
            </label>
          </div>
          <Input
            className='col-span-2'
            placeholder='Confirm password'
            position='single'
            type={'password'}
            ref={newPasswordConfirmationRef}
            autoComplete='new-password'
          />
        </div>

        <div className='mt-3 flex sm:justify-end'>
          <div className='w-full sm:w-1/3'>
            <Button type='submit'>
              <span className='flex justify-center items-center gap-x-2'>
                <FontAwesomeIcon className='my-0' icon={faFloppyDisk} /> Change
                password
              </span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PasswordSection