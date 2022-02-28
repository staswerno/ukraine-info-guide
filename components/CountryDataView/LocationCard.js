import { useTranslation } from "next-i18next";
import { coordsToGoogleMapsUrl } from "../../utils";
import NewTabLink from "../NewTabLink";

const LocationCard = ({ data }) => {
  const { t } = useTranslation();
  const { type, address, thumbnail, qr, lat, lon } = data;
  const mapUrl = lat && lon && coordsToGoogleMapsUrl(lat, lon);

  return (
    <section className="location-card-reception">
      {type && type.length &&
        <div className="location-card-type">
          <p>{type}</p>
        </div>
      }
      {address && address.length &&
        <div className="location-card-address-wrapper">
          <div className="location-card-address">
            <p>{address}</p>
          </div>
        </div>
      }
      {thumbnail && thumbnail.length &&
        <div className="location-card-thumbnail">
          <img src={thumbnail} alt={address || type} />
        </div>
      }
      {qr && qr.length &&
        <div className="location-card-qr">
          <img src={qr} alt="QR code" />
        </div>
      }
      {mapUrl && mapUrl.length &&
        <NewTabLink href={mapUrl} className="location-card-google font-semibold">
          {t("Map")}
        </NewTabLink>
      }
    </section>
  );
}
export default LocationCard;
