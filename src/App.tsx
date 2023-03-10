import { useState } from 'react';

import { ArticleList } from './components/ArticleList';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { UserType } from './types/userType';

function App() {
	const [user, setUser] = useState<UserType | null>(null);
	const hasUser = Boolean(user);

  return (
		<div className="h-screen">
			<Header user={user} />

			{hasUser ?
				<ArticleList />
				:
				<Form
					onSubmit={data => setUser(data)}
				/>
			 }

		</div>
  )
}

export default App
