import * as S from './Track.styles'
import {useParams} from "react-router-dom";
import {useThemeContext} from "../../contexts/color_theme";
import {useDispatch, useSelector} from "react-redux";
import {chose} from "../../store";

export default function Track({id, track, track_add, executor, album, time}) {
	const params = useParams();
	const {theme} = useThemeContext();
	const dispatch = useDispatch();

	const cur_id = useSelector(state => state.id);
	const isPlaying = useSelector(state => state.is_playing);

	let idCacl;
	if (params.id === '1') {
		idCacl = 8;
	}
	else if (params.id === '2') {
		idCacl = 18;
	}
	else if (params.id === '3') {
		idCacl = 28;
	}
	else {
		idCacl = 8
	}

	const handleClick = (id, idCalc) => {
		dispatch(chose({ id: id - idCalc }));
	};

	return (
		<S.PlayListItem>
				<S.PlaylistTrack>
					<S.TrackTitle>
						<S.TrackTitleImage $theme={theme}>
							<S.TrackTitleSvg alt="music">
								<use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
							</S.TrackTitleSvg>
							{id - idCacl === cur_id && <S.BlueVioletDot $isPlaying={isPlaying} src="/img/blueviolet_dot.svg" alt="blueviolet_dot"/>}
						</S.TrackTitleImage>
						<S.TrackTitleLink $theme={theme} onClick={() => handleClick(id, idCacl)}>{track}<S.TrackTitleSpan>{track_add}</S.TrackTitleSpan></S.TrackTitleLink>
					</S.TrackTitle>
					<S.TrackAuthor>
						<S.TrackAuthorLink $theme={theme}>{executor}</S.TrackAuthorLink>
					</S.TrackAuthor>
					<S.TrackAlbum>
						<S.TrackAlbumLink $theme={theme}>{album}</S.TrackAlbumLink>
					</S.TrackAlbum>
					<S.TrackTimeSvg alt="time">
						<use xlinkHref="img/icon/sprite.svg#icon-like"></use>
					</S.TrackTimeSvg>
					<S.TrackTimeText>{time}</S.TrackTimeText>
				</S.PlaylistTrack>
		</S.PlayListItem>
	)
}
