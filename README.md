# movie

tmdb API를 활용한 영화 추천 사이트

<br/>

## ⚙ Stack

- **React**

  - styled-components
  - react-icons
  - react-responsive
  - react-router-dom

- **Redux-thunk**

- 배포 : netlify

<br/>

## 🖼 UI

![제목 없음2](https://user-images.githubusercontent.com/70693728/110071057-ac207a80-7dbe-11eb-835e-23068f13152a.jpg)

- [Link](https://movie4e8f82.netlify.app/)
- [Problem & Solution 정리](https://heeyeonjeong.tistory.com/98)

<br/>

## 📚 Features

- 오늘의 영화 Top10 추천

- 선택한 장르별 영화 Top20 추천

- 영화 선택 저장
  - 선택순, 추천순, 인기순 정렬

<br/>

## ✅ 구현시 고민한 부분

- 재사용할 수 있는 컴포넌트는 분리될 수 있도록 컴포넌트 구조를 나눴다.
- **container component**와 **presentational component**를 나누어 상태, UI를 관리하는 구조로 구성했다.
- 유틸함수로 refactoring하여 api를 받아오는 부분에서 반복되는 함수를 정리했다.
- 불필요한 style은 작성하지 않기 위해 고민했다.

<br/>

## 👩‍💻 기억하고 싶은 주요 기능 Component

- **GenreList Component** : 체크박스 컨트롤 컴포넌트

```javascript
function GenreListComponent({ data }) {
  const dispatch = useDispatch();
  const userGenre = JSON.parse(localStorage.getItem("genre"))
    ? JSON.parse(localStorage.getItem("genre"))
    : [];

  //유저가 선택한 장르
  const [selectGenres, setselectGenres] = useState(userGenre);
  //"모든장르" input controller
  const [isAllChecked, setIsAllChecked] = useState(
    userGenre.length === 0 ? true : false
  );

  //전체해제
  const onCancle = () => {
    setIsAllChecked(true);
    setselectGenres([]);
  };

  //"모든장르" 컨트롤
  const handleAll = () => {
    setselectGenres([]);
    setIsAllChecked(true);
  };

  //"모든장르" 제외 컨트롤
  const handleCheck = (e, checked, genre) => {
    setIsAllChecked(false);
    if (checked) {
      setselectGenres([...selectGenres, genre]);
    } else {
      setselectGenres(
        selectGenres.filter(
          (genres) => JSON.stringify(genres) !== JSON.stringify(genre)
        )
      );
    }
  };

  //찾아보기
  const onSearch = () => {
    setGenre(selectGenres);
    dispatch(getGenreMovies(selectGenres.map((genre) => genre.id)));
  };

  return (
    <S.Section>
      <S.Genres>
        <S.Title>장르별 영화 찾기</S.Title>
        <S.GenreBox>
          <S.GenreList>
            <S.Input
              type="checkbox"
              name="allGenres"
              id="allGenres"
              checked={isAllChecked}
              onChange={(e) => handleAll(e.target.checked)}
            />
            <S.Label htmlFor="allGenres">모든 장르</S.Label>
          </S.GenreList>
          {data &&
            data.map((genre) => (
              <S.GenreList key={genre.id}>
                <S.Input
                  type="checkbox"
                  name={genre.name}
                  id={genre.id}
                  checked={
                    JSON.stringify(selectGenres).includes(JSON.stringify(genre))
                      ? true
                      : false
                  }
                  onChange={(e) => handleCheck(e, e.target.checked, genre)}
                />
                <S.Label htmlFor={genre.id}>{genre.name}</S.Label>
              </S.GenreList>
            ))}
        </S.GenreBox>
        <S.ButtonBox>
          <S.Button onClick={onCancle}>전체해제</S.Button>
          <S.Button onClick={onSearch}>찾아보기</S.Button>
        </S.ButtonBox>
      </S.Genres>
    </S.Section>
  );
}

export default GenreListComponent;
```
