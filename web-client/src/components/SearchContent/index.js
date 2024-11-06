import Search from "antd/es/input/Search";
import "./SearchContent.scss";

const SearchContent = () => {
  const onSearch = (value) => console.log(value);

  return (
    <>
      <Search
        placeholder="Tìm kiếm khóa học"
        allowClear
        onSearch={onSearch}
        size="large"
        className="searchContent"
      />
    </>
  )
}

export default SearchContent;