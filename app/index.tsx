import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';

import Question from '@/components/question/Question';
import Result from '@/components/result/Result';

import { useStore } from '@/hooks/useStore';

const Screen = () => {
	const { appStore } = useStore();

	const { top: paddingTop, bottom: paddingBottom } = useSafeAreaInsets();

	return (
		<View style={[styles.screen, { paddingTop, paddingBottom }]}>
			{appStore.isFinished ? <Result /> : <Question />}
		</View>
	);
};

export default observer(Screen);

const styles = StyleSheet.create({
	screen: { flex: 1, paddingHorizontal: 16 },
});
