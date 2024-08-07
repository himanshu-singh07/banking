'use client';


import CountUp from 'react-countup'

const AnimatedCounter = ({amount} :{amount:number}) => {
  return (
      <div className='w-full'>
          <CountUp
              decimal=','
              duration={1.75}
              decimals={2}
              end={amount}
              prefix='₹' />
    </div>
  )
}

export default AnimatedCounter