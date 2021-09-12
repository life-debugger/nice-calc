import {useState} from 'react';
import './App.css';
import './mobile-responsive.css';
import "animate.css"


const NUMBER_BTN_COLOR = '#FBE7C6'
const OPERATOR_BTN_COLOR = '#B4F8C8'
const OPTION_BTN_COLOR = '#FFAEBC'
const MONITOR_COLOR = '#A0E7E5'

function App() {
	const [currentNumber, setCurrentNumber] = useState(0);
	const [lastNumber, setLastNumber] = useState(0);
	const [operator, setOperator] = useState('');
	const [isNewOperation, setIsNewOperation] = useState(false)


	function handleResetBtn() {
		setCurrentNumber(0)
		setOperator('')
		setLastNumber(0)
	}

	function handleNumberBtns(n) {
		if (isNewOperation) {
			setCurrentNumber(n)
			setIsNewOperation(false)
		} else {
			setCurrentNumber(currentNumber + n)
		}
	}

	function getResult() {
		let result = 0;
		switch (operator) {
			case '+':
				result = parseInt(lastNumber) + parseInt(currentNumber)
				console.log('result: ' + result)
				break
			case '-':
				result = parseInt(lastNumber) - parseInt(currentNumber)
				console.log('result: ' + result)
				break
			case '*':
				result = parseInt(lastNumber) * parseInt(currentNumber)
				console.log('result: ' + result)
				break
			case '/':
				result = parseInt(lastNumber) / parseInt(currentNumber)
				console.log('result: ' + result)
				break
			default:
				break;
		}
		return result
	}


	function handleOperatorBtns(o) {
		let result = 0;
		if (operator === '') {
			setOperator(o)
			setLastNumber(currentNumber)
			setCurrentNumber(0)
		} else {
			result = getResult()
			setLastNumber(result)
			setCurrentNumber(result)
			setOperator(o)
			setIsNewOperation(true)
		}
	}

	function handleEqualButton() {
		let result = 0;
		result = getResult()
		setLastNumber(result)
		setCurrentNumber(result)
		setOperator('')
		setIsNewOperation(true)
	}

	const Btn = (props) => {
		return (
			<div
				className='btn'
				onClick={props.onClickHandler}
				style={{backgroundColor: props.bgColor}}
			>
				{props.value}
			</div>
		)
	}


	return (
		<div className="App">
			<div className='container'>
				<div className='monitor' style={{backgroundColor:MONITOR_COLOR}}>
					<span>

						{parseInt(currentNumber)}
					</span>
				</div>
				<div className='btn-container'>

					<Btn
						value='1'
						bgColor={NUMBER_BTN_COLOR}
						onClickHandler={() => {
							handleNumberBtns('1')
						}}
					/>
					<Btn
						value='2'
						bgColor={NUMBER_BTN_COLOR}
						onClickHandler={() => {
							handleNumberBtns('2')
						}}
					/>
					<Btn
						value='3'
						bgColor={NUMBER_BTN_COLOR}
						onClickHandler={() => {
							handleNumberBtns('3')
						}}
					/>
					<Btn
						value='C'
						bgColor={ OPTION_BTN_COLOR }
						onClickHandler={() => {
							handleResetBtn()
						}}
					/>
					<div className='break' />
					<Btn
						value='4'
						bgColor={NUMBER_BTN_COLOR}
						onClickHandler={() => {
							handleNumberBtns('4')
						}}
					/>
					<Btn value='5'
					     bgColor={NUMBER_BTN_COLOR}
					     onClickHandler={() => {
						     handleNumberBtns('5')
					     }}
					/>
					<Btn value='6'
					     bgColor={NUMBER_BTN_COLOR}
					     onClickHandler={() => {
						     handleNumberBtns('6')
					     }}
					/>
					<Btn
						value='+'
						bgColor={OPERATOR_BTN_COLOR}
						onClickHandler={() => {
							handleOperatorBtns('+')
						}}
					/>
					<div className='break' />
					<Btn
						value='7'
						bgColor={NUMBER_BTN_COLOR}
						onClickHandler={() => {
							handleNumberBtns('7')
						}}
					/>
					<Btn value='8'
					     bgColor={NUMBER_BTN_COLOR}
					     onClickHandler={() => {
						     handleNumberBtns('8')
					     }}
					/>
					<Btn value='9'
					     bgColor={NUMBER_BTN_COLOR}
					     onClickHandler={() => {
						     handleNumberBtns('9')
					     }}
					/>
					<Btn value='-'
					     bgColor={OPERATOR_BTN_COLOR}
					     onClickHandler={() => {
						     handleOperatorBtns('-')
					     }}
					/>
					<div className='break' />
					<Btn value='0'
					     bgColor={NUMBER_BTN_COLOR}
					     onClickHandler={() => {
						     handleNumberBtns('0')
					     }}
					/>
					<Btn value='='
					     bgColor={OPTION_BTN_COLOR}
					     onClickHandler={handleEqualButton}
					/>
					<Btn value='/'
					     bgColor={OPERATOR_BTN_COLOR}
					     onClickHandler={() => {
						     handleOperatorBtns('/')
					     }}
					/>
					<Btn value='*'
					     bgColor={OPERATOR_BTN_COLOR}
					     onClickHandler={() => {
						     handleOperatorBtns('*')
					     }}
					/>

				</div>

			</div>
		</div>
	);
}

export default App;
