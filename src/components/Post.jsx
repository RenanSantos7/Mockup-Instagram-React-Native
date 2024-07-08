import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import {
	faHeart as faHeartOutline,
	faComment,
	faPaperPlane
} from '@fortawesome/free-regular-svg-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Post({ data, onLike }) {
	function lidaComLikes(num) {
		if (num === 0) return null;

		if (num === 1) return <Text style={styles.likes}> '1 like'</Text>;

		return <Text style={styles.likes}>{num} likes</Text>;
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image
					source={{ uri: data.user.profile_pic }}
					style={styles.profilePìc}
				/>
				<Text style={styles.username}>{data.user.name}</Text>
			</View>

			<View style={styles.post}>
				<Image
					source={{ uri: data.img }}
					style={styles.imgpost}
					resizeMode='cover'
				/>
				<Text style={styles.description}>{data.description}</Text>
			</View>

			<View style={styles.footer}>
				<TouchableOpacity /* onPress={() => onLike(data.id)} */>
					{data.liked ? (
						<FontAwesomeIcon
							icon={faHeartSolid}
							size={20}
							color='#FF4C75'
						/>
					) : (
						<FontAwesomeIcon
							icon={faHeartOutline}
							size={20}
						/>
					)}
				</TouchableOpacity>

				<TouchableOpacity>
					<FontAwesomeIcon icon={faComment} size={20} />
				</TouchableOpacity>

				<TouchableOpacity>
					<FontAwesomeIcon icon={faPaperPlane} size={20} />
				</TouchableOpacity>
			</View>
			{lidaComLikes(data.likes)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 'auto',
		marginVertical: 8,
	},
	header: {
		gap: 10,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 15,
		paddingVertical: 8,
	},
	username: {
		fontSize: 16,
		fontWeight: '600',
	},
	profilePìc: {
		width: 35,
		height: 35,
		borderRadius: 500,
		borderWidth: 1,
		borderColor: 'lightgrey',
	},
	post: {
		flex: 1,
	},
	imgpost: {
		height: 400,
	},
	description: {
		fontSize: 14,
		marginVertical: 8,
		paddingHorizontal: 15,
	},
	footer: {
		flexDirection: 'row',
		gap: 20,
		paddingHorizontal: 15,
	},
	likes: {
		paddingHorizontal: 15,
		paddingVertical: 8,
	},
});
