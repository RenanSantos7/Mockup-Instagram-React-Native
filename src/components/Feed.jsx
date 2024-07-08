import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDataContext } from '../context/DataContext';
import Post from './Post';

export default function Feed({}) {
	const { feed, setFeed } = useDataContext();

	function handleLike(id) {
		setFeed(prev =>
			prev.map(item => {
				if (item.id === id) return { ...item, liked: !liked };
			})
		);
	}

	return (
		<FlatList
			data={feed}
            renderItem={({ item }) => (
                <Post
                    data={item}
                    onLike={handleLike}
                />)}
			showsVerticalScrollIndicator={false}
            style={styles.container}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 15,
	},
});
