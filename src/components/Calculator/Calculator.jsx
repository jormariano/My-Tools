import './Calculator.css'
import Buttons from './Buttons'
import Switch from './Switch'
import { useState } from 'react'

const Calculator = () => {

  const [data, setData] = useState({ operation: '', result: '' })

  const writing = (event) => {

    const amount = event.target.innerText

    const isOperation = amount === '+' || amount === '-' || amount === '/' || amount === '*' || amount === '%'

    if (data.operation.length >= 9) return

    if (amount === '+/-' && data.operation === '') return

    if (amount === '%' && data.operation.includes('%')) return

    if (data.operation.includes('error')) {
      setData({ ...data, operation: amount })

    } else if (data.result !== '' && data.operation === '' && isOperation) {

      setData({ ...data, operation: `${data.result}` + amount })

    } else if (amount === '+/-' && data.operation !== '') {

      if (data.operation.slice(0, 1) === '-') {

        setData({ ...data, operation: `${data.operation.slice(1, data.operation.length)}` })

      } else {

        setData({ ...data, operation: `-${data.operation}` })

      }

    } else {
      setData({ ...data, operation: `${data.operation}` + amount })
    }

  }

  const eliminate = () => {
    setData({ ...data, operation: data.operation.slice(0, data.operation.length - 1) })
  }

  const deleteAll = () => {
    setData({ operation: '', result: '' })
  }

  const result = () => {

    try {

      let result = ''

      if (data.operation.includes('%')) {

        const values = data.operation.split('%')

        result = eval(`${values[1]}*(${values[0]}/100)`)

      } else {

        result = eval(data.operation)
      }

      setData({ ...data, result, operation: '' })

    } catch (error) {

      setData({ ...data, operation: 'error' })

    }
  }

  return (
    <div className='calculator' id='calculator'>
      <div className='calculator-container'>
        <Switch />
        <span className='result'>{data.result}</span>
        <span className='display'>{data.operation}</span>
        <Buttons text='C' style='grey' handleClick={deleteAll} />
        <Buttons text='+/-' style='grey' handleClick={writing} />
        <Buttons text='%' style='grey' handleClick={writing} />
        <Buttons text='/' style='operation' handleClick={writing} />
        <Buttons text='7' style='number' handleClick={writing} />
        <Buttons text='8' style='number' handleClick={writing} />
        <Buttons text='9' style='number' handleClick={writing} />
        <Buttons text='*' style='operation' handleClick={writing} />
        <Buttons text='4' style='number' handleClick={writing} />
        <Buttons text='5' style='number' handleClick={writing} />
        <Buttons text='6' style='number' handleClick={writing} />
        <Buttons text='-' style='operation' handleClick={writing} />
        <Buttons text='1' style='number' handleClick={writing} />
        <Buttons text='2' style='number' handleClick={writing} />
        <Buttons text='3' style='number' handleClick={writing} />
        <Buttons text='+' style='operation' handleClick={writing} />
        <Buttons text='.' style='number' handleClick={writing} />
        <Buttons text='0' style='number' handleClick={writing} />
        <Buttons text='<' style='number' handleClick={eliminate} />
        <Buttons text='=' style='operation' handleClick={result} />
      </div>
    </div>
  )
}

export default Calculator