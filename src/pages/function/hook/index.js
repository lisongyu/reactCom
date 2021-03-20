import React, {
  useState, useEffect,
  useLayoutEffect,
  useMemo,
  useCallback
} from 'react';

export default function (props) {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('text-demo')

  useEffect(() => {
    console.log('useEffect')
  }, [count])

  useEffect(() => {
    console.log('useEffect2')
  }, [])

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  }, [])

  const handleCount = () => {
    setCount(count + 1)
  }

  const noCacheText = () => {
    console.log('text changed')
    return text
  }

  const memoText = useMemo(() => {
    console.log('text changed121')
    return text
  }, [text])

  return (
    <div>
      <h1 onClick={handleCount}>count:{count}</h1>
      <h2>text:{noCacheText()}</h2>
      <h2>text:{memoText}</h2>
    </div>
  )
}