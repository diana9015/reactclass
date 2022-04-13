import styled from 'styled-components';

const Pop = styled.aside`
	width: 100%;
	height: 100vh;
	padding: 5vw;
	position: fixed;
	top: 0px;
	left: 0px;
	background: rgba(0, 0, 0, 0.9);
	z-index: 10;

	> span {
		font: bold 14px/1 'arial';
		color: #fff;
		cursor: pointer;
		position: absolute;
		top: 3vw;
		right: 3vw;
	}

	.con {
		width: 100%;
		height: 100%;
		border: 1px solid #888;
		overflow: hidden;

		iframe {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		img {
			width: 100%;
			height: 1 00%;
			object-fit: cover;
		}
	}
`;

function Popup(props) {
	return (
		<Pop>
			<span onClick={() => props.setOpen(false)}>close</span>
			{/* 닫기 버튼 클릭 시, youtube에서 props로 setOpen값 전달받아서 setOpen값을 false로 바꿔주어 닫기 처리 */}
			<div className='con'>{props.children}</div>
		</Pop>
	);
}

export default Popup;
