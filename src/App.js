import {useState} from 'react';
import './App.css';
import './mobile-responsive.css';
import "animate.css"


function App() {
	const [currentNumber, setCurrentNumber] = useState(0);
	const [lastNumber, setLastNumber] = useState(0);
	const [operator, setOperator] = useState('');
	const [isNewOperation, setIsNewOperation] = useState(false)

	function handleResetBtn(){
		setCurrentNumber(0)
		setOperator('')
		setLastNumber(0)
	}

	function handleNumberBtns(n) {
		if (isNewOperation) {
			setCurrentNumber(n)
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
				style={{backgroundColor:'red'}}
			>
				{props.value}
			</div>
		)
	}


	return (
		<div className="App">
			<div className='container'>
				<div className='monitor'>
					<span>

						{parseInt(currentNumber)}
					</span>
				</div>
				<div className='btn-container'>

					<Btn
						value='1'
						onClickHandler={() => {
							handleNumberBtns('1')
						}}
					/>
					<Btn
						value='2'
						onClickHandler={() => {
							handleNumberBtns('2')
						}}
					/>
					<Btn
						value='3'
						onClickHandler={() => {
							handleNumberBtns('3')
						}}
					/>
					<Btn
						value='C'
						onClickHandler={() => {handleResetBtn()}}
					/>
					<Btn
						value='4'
						onClickHandler={() => {
							handleNumberBtns('4')
						}}
					/>
					<Btn value='5'
					     onClickHandler={() => {
						     handleNumberBtns('5')
					     }}
					/>
					<Btn value='6'
					     onClickHandler={() => {
						     handleNumberBtns('6')
					     }}
					/>
					<Btn
						value='+'
						onClickHandler={() => {
							handleOperatorBtns('+')
						}}
					/>
					<Btn
						value='7'
						onClickHandler={() => {
							handleNumberBtns('7')
						}}
					/>
					<Btn value='8'
					     onClickHandler={() => {
						     handleNumberBtns('8')
					     }}
					/>
					<Btn value='9'
					     onClickHandler={() => {
						     handleNumberBtns('9')
					     }}
					/>
					<Btn value='-'
					     onClickHandler={() => {
						     handleOperatorBtns('-')
					     }}
					/>
					<Btn value='0'
					     onClickHandler={() => {
						     handleNumberBtns('0')
					     }}
					/>
					<Btn value='=' onClickHandler={handleEqualButton}/>
					<Btn value='/'
					     onClickHandler={() => {
						     handleOperatorBtns('/')
					     }}
					/>
					<Btn value='*'
					     onClickHandler={() => {
						     handleOperatorBtns('+')
					     }}
					/>

				</div>

			</div>
		</div>
	);
}

export default App;
