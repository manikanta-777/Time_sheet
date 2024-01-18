import SearchBarComponent from "../../atoms/searchBarComponent/SearchBarComponent"
import ProfileIconComponent from "../../atoms/profileIconComponent/ProfileIconComponent"

import './SearchSectionComponent.css'

const SearchSectionComponent = ({ usersList, setSearchValue }) => {

    return (
        <div>
            <SearchBarComponent setSearchValue={setSearchValue} />
            {usersList.map((candidate) =>
                <div className="d-flex userInfo">
                    <div>
                        <ProfileIconComponent firstLetter={candidate.userName.slice(0, 1).toUpperCase()} />
                    </div>
                    <div className="ms-2">
                        <p className="mb-0">{candidate.userName}</p>
                        <p className="mb-0">{candidate.domain}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
export default SearchSectionComponent