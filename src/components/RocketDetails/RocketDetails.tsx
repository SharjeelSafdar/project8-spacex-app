import React from 'react';
import { useRocketDetailsQuery } from '../../api/index';
import { FcWikipedia } from 'react-icons/fc';
// Styles
import styles from './RocketDetails.module.css';

const rocketId = "falcon9";

export const RocketDetails = () => {
    const { data, loading, error } = useRocketDetailsQuery({
        variables: { rocketId }
    });
    return (
        <div className={styles.container}>
            {loading ? 'Loading data...' : error ? 'Error fetching data...' :
                <>
                    <h2 className={styles.heading} data-testid="heading">{data?.rocket?.rocket_name}</h2>
                    <p>{data?.rocket?.description}</p>
                    <h3 className={styles.subHeading}>General Details</h3>
                    <table className={styles.generalDetails}>
                        <tbody>
                            <tr>
                                <td>Active</td>
                                <td data-testid="active">{data?.rocket?.active ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <td>First Flight</td>
                                <td data-testid="first-flight">
                                    {!!data?.rocket?.first_flight ? data.rocket.first_flight : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Height</td>
                                <td data-testid="height">
                                    {!!data?.rocket?.height?.meters ? `${data.rocket.height.meters} m` : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Diameter</td>
                                <td data-testid="diameter">
                                    {!!data?.rocket?.diameter?.meters ? `${data.rocket.diameter.meters} m` : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Mass</td>
                                <td data-testid="mass">
                                    {!!data?.rocket?.mass?.kg ? `${data.rocket.mass.kg} kg` : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Stages</td>
                                <td data-testid="stages">
                                    {!!data?.rocket?.stages ? data.rocket.stages : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Boosters</td>
                                <td data-testid="boosters">
                                    {!!data?.rocket?.boosters ? data.rocket.boosters : '0'}
                                </td>
                            </tr>
                            <tr>
                                <td>Landing Legs Count</td>
                                <td data-testid="num-legs">
                                    {!!data?.rocket?.landing_legs?.number ? data.rocket.landing_legs.number : '0'}
                                </td>
                            </tr>
                            <tr>
                                <td>Landing Legs Material</td>
                                <td data-testid="material-legs">
                                    {!!data?.rocket?.landing_legs?.material ? data.rocket.landing_legs.material : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Cost Per Launch</td>
                                <td data-testid="cost-per-launch">
                                    {!!data?.rocket?.cost_per_launch ? `$${data.rocket.cost_per_launch}` : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Success Rate</td>
                                <td data-testid="success-rate">
                                    {!!data?.rocket?.success_rate_pct ? `${data.rocket.success_rate_pct}%` : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Company</td>
                                <td data-testid="company">
                                    {!!data?.rocket?.company ? data.rocket.company : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td data-testid="country">
                                    {!!data?.rocket?.country ? data.rocket.country : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Wikipedia Link</td>
                                <td>
                                    {!!data?.rocket?.wikipedia &&
                                        <a
                                            href={data?.rocket?.wikipedia}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.wikiLink}
                                            title="Wikipedia Link"
                                            data-testid="wiki-link"
                                        >
                                            <FcWikipedia />
                                        </a>
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className={styles.subHeading}>First Stage Details</h3>
                    <table className={styles.fistStage}>
                        <tbody>
                            <tr>
                                <td>Reusable</td>
                                <td data-testid="reusable">
                                    {data?.rocket?.first_stage?.reusable ? 'Yes' : 'No'}
                                </td>
                            </tr>
                            <tr>
                                <td>Number of Engines</td>
                                <td data-testid="num-engines1">
                                    {data?.rocket?.first_stage?.engines ? data?.rocket?.first_stage?.engines : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Amount of Fuel</td>
                                <td data-testid="fuel1">
                                    {data?.rocket?.first_stage?.fuel_amount_tons ? `${data?.rocket?.first_stage.fuel_amount_tons} tons` : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Burn Time</td>
                                <td data-testid="burn1">
                                    {data?.rocket?.first_stage?.burn_time_sec ? `${data?.rocket?.first_stage.burn_time_sec} s` : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Thrust (Sea Level)</td>
                                <td data-testid="thrust-sea1">
                                    {data?.rocket?.first_stage?.thrust_sea_level?.kN ? `${data?.rocket?.first_stage.thrust_sea_level.kN} kN` : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Thrust (Vacuum)</td>
                                <td data-testid="thrust-vacuum1">
                                    {data?.rocket?.first_stage?.thrust_vacuum?.kN ? `${data?.rocket?.first_stage.thrust_vacuum.kN} kN` : 'N/A'}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className={styles.subHeading}>Second Stage Details</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Number of Engines</td>
                                <td data-testid="num-engines2">
                                    {data?.rocket?.second_stage?.engines ? data.rocket.second_stage.engines : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Amount of Fuel</td>
                                <td data-testid="fuel2">
                                    {data?.rocket?.second_stage?.fuel_amount_tons ? `${data.rocket.second_stage.fuel_amount_tons} tons` : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Burn Time</td>
                                <td data-testid="burn2">
                                    {data?.rocket?.second_stage?.burn_time_sec ? `${data.rocket.second_stage.burn_time_sec} s` : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Thrust (Vacuum)</td>
                                <td data-testid="thrust-vacuum2">
                                    {data?.rocket?.second_stage?.thrust?.kN ? `${data.rocket.second_stage.thrust.kN} kN` : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Payload Option 1</td>
                                <td data-testid="payload1">
                                    {data?.rocket?.second_stage?.payloads?.option_1 ? data.rocket.second_stage.payloads.option_1 : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Payload Option 2</td>
                                <td data-testid="payload2">
                                    {data?.rocket?.second_stage?.payloads?.option_2 ? data.rocket.second_stage.payloads.option_2 : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Composite Fairings Height</td>
                                <td data-testid="fairing-height">
                                    {data?.rocket?.second_stage?.payloads?.composite_fairing?.height?.meters 
                                        ? `${data.rocket.second_stage.payloads.composite_fairing.height.meters} m` 
                                        : 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td>Composite Fairings Diameter</td>
                                <td data-testid="fairing-diameter">
                                    {data?.rocket?.second_stage?.payloads?.composite_fairing?.diameter?.meters 
                                        ? `${data.rocket.second_stage.payloads.composite_fairing.diameter.meters} m` 
                                        : 'N/A'}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className={styles.subHeading}>Engines' Details</h3>
                    <table>
                        <tr>
                            <td>Number of Engines</td>
                            <td data-testid="total-engines">
                                {data?.rocket?.engines?.number ? data?.rocket?.engines?.number : 'N/A'}
                            </td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td data-testid="type">
                                {data?.rocket?.engines?.type ? data?.rocket?.engines.type : 'N/A'}
                            </td>
                        </tr>
                        <tr>
                            <td>Version</td>
                            <td data-testid="version">
                                {data?.rocket?.engines?.version ? data?.rocket?.engines.version : 'N/A'}
                            </td>
                        </tr>
                        <tr>
                            <td>Layout</td>
                            <td data-testid="layout">
                                {data?.rocket?.engines?.layout ? data?.rocket?.engines.layout : 'N/A'}
                            </td>
                        </tr>
                        <tr>
                            <td>Maximum Engines Lost</td>
                            <td data-testid="loss">
                                {data?.rocket?.engines?.engine_loss_max ? data?.rocket?.engines.engine_loss_max : 'N/A'}
                            </td>
                        </tr>
                        <tr>
                            <td>Propellant 1</td>
                            <td data-testid="propellant1">
                                {data?.rocket?.engines?.propellant_1 ? data?.rocket?.engines.propellant_1 : 'N/A'}
                            </td>
                        </tr>
                        <tr>
                            <td>Propellant 2</td>
                            <td data-testid="propellant2">
                                {data?.rocket?.engines?.propellant_2 ? data?.rocket?.engines.propellant_2 : 'N/A'}
                            </td>
                        </tr>
                        <tr>
                            <td>Thrust (Sea Level)</td>
                            <td data-testid="thrust-sea-t">
                                {data?.rocket?.engines?.thrust_sea_level?.kN 
                                    ? `${data?.rocket?.engines.thrust_sea_level.kN} kN` 
                                    : 'N/A'}
                            </td>
                        </tr>
                        <tr>
                            <td>Thrust (Vacuum)</td>
                            <td data-testid="thrust-vacuum-t">
                                {data?.rocket?.engines?.thrust_vacuum?.kN 
                                    ? `${data?.rocket?.engines.thrust_vacuum.kN} kN` 
                                    : 'N/A'}
                            </td>
                        </tr>
                        <tr>
                            <td>Thrust to Weight Ratio</td>
                            <td data-testid="ratio">
                                {data?.rocket?.engines?.thrust_to_weight 
                                    ? data?.rocket?.engines.thrust_to_weight 
                                    : 'N/A'}
                            </td>
                        </tr>
                    </table>

                    <h3 className={styles.subHeading}>Rocket Images</h3>
                    {data && data.rocket && data.rocket.flickr_images ?
                        data.rocket.flickr_images.map(image => (
                                <img
                                    className={styles.image}
                                    key={image?.toString()}
                                    src={image?.toString()}
                                    alt={`${data.rocket?.rocket_id}`}
                                    title={`${data.rocket?.rocket_name}`}
                                    data-testid="image"
                                />
                            ))
                            : ' Not Available'
                        }
                </>
            }
        </div>
    )
}
