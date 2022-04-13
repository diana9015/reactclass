import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Popup from '../common/Popup';

function Youtube() {
	const [items, setItems] = useState([]);

	const [open, setOpen] = useState(false);
	//팝업의 생성유무를 관리하는  state생성

	const [index, setIndex] = useState(0);
	// article클릭시 클릭한 리스트의 순서값이 담길 state
	const key = 'AIzaSyBZFBuapkASPcRBXB2-d_ak5-ecCpVicI4';
	const num = 5;
	const id = 'PLHtvRFLN5v-UVVpNfWqtgZ6YPs9ZJMWRK';
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;

	useEffect(() => {
		axios.get(url).then((json) => {
			console.log(json.data.items);
			setItems(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout name={'Youtube'}>
				{items.map((item, idx) => {
					const desc = item.snippet.description;
					const date = item.snippet.publishedAt;

					return (
						//클릭 이벤트 발생 시 oepn값 true로 변경

						<article
							key={idx}
							onClick={() => {
								setOpen(true);
								setIndex(idx);
							}}>
							<img src={item.snippet.thumbnails.medium.url} />
							<h2>{item.snippet.title}</h2>
							<p>{desc.length > 150 ? desc.substr(0, 150) + '...' : desc}</p>
							<span>{date.split('T')[0]}</span>
						</article>
					);
				})}
			</Layout>

			{/* 오픈이 true면 열리고 false면 안열림 */}
			{open ? (
				<Popup setOpen={setOpen}>
					<iframe
						src={
							'https://www.youtube.com/embed/' +
							items[index].snippet.resourceId.videoId
						}
						frameBorder='0'></iframe>
				</Popup>
			) : null}
			{/* props 값 전달. setOpen={setOpen}으로 */}
		</>
	);
}

export default Youtube;
