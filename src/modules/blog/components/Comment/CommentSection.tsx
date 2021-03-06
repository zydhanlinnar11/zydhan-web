import Modal from '@/common/components/Modal'
import SpinnerLoading from '@/common/components/SpinnerLoading'
import ModalAction from '@/common/types/ModalAction'
import React, { FC, useState } from 'react'
import CommentCard from './CommentCard'
import NewCommentSection from './NewCommentSection'
import useComments from './useComments'

type Props = {
  slug: string
}

const CommentSection: FC<Props> = ({ slug }) => {
  const { comments, isError, isLoading, mutate } = useComments(slug)
  const [isModalShowed, setIsModalShowed] = useState(false)
  const [modalAction, setModalAction] = useState<ModalAction>()

  return (
    <>
      <Modal
        bodyText="Are you sure want to delete this comment?"
        handleClose={() => setIsModalShowed(false)}
        isShowed={isModalShowed}
        title="Delete comment"
        action={modalAction}
      />
      <section
        className="text-left px-2 pb-8
    target:before:content-[''] target:before:h-14 target:before:block target:before:-mt-14"
        id="comments-section"
      >
        <h2 className="border-b border-b-white/[0.24] mb-4 text-2xl pb-2 font-medium">
          Comments
        </h2>
        {isLoading && <SpinnerLoading />}
        {(isError || !comments) && (
          <p className="text-center my-12">
            I&apos;m sorry, but i can&apos;t load all comments for now 😢
          </p>
        )}
        {comments &&
          (comments.length > 0 ? (
            <ul className="mb-3 flex flex-col gap-5">
              {comments.map((comment) => (
                <CommentCard
                  key={comment.id}
                  comment={comment}
                  mutate={mutate}
                  openModal={(commentId, handler) => {
                    setModalAction({ text: 'Delete', type: 'danger', handler })
                    setIsModalShowed(true)
                  }}
                  closeModal={() => setIsModalShowed(false)}
                />
              ))}
            </ul>
          ) : (
            <p className="text-center my-12">
              There are currently no comments. Feel free to comment on this
              post. I would love to hear your views on my blog! 😁
            </p>
          ))}
        <NewCommentSection {...{ mutate, slug }} />
      </section>
    </>
  )
}

export default CommentSection
