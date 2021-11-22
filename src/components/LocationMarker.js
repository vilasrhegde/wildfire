import { Icon } from '@iconify/react';
import LocationIcon from '@iconify/icons-mdi/fire-alert'; 

export const LocationMarker = ({ lat, lang, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={LocationIcon} className="location-icon" />
        </div>
    )
}
