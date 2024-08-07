import { loadUser } from '@/store/reducers/loginSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const AppInitializer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

return null
};

export default AppInitializer;
