import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

function SkeletonList() {
  return (
    <section className="p-4">
      {
        Array({ length: 6 }).map((_, id) => (<Skeleton key={id}>
          <div className='w-full py-6 my-2' />
        </Skeleton>))
      }
    </section>
  )
}

export default SkeletonList