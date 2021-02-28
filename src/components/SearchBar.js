import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useEffect, useState } from 'react';
import { QuApiCalls } from '../services';

const useStyles = makeStyles({
    inputRoot: {
        borderRadius: 99,
        backgroundColor: "inherit",
        outline: 0,
        fontSize: 14
    },
    input: {
        borderColor: "none" 
    }
  });

const SearchBar = ({ handleSubmit, enterprise, setEnterprise }) => {
    const [facilities, setFacilities] = useState([]);
    const [cities, setCities] = useState([]);
    const [services, setServices] = useState([]);
    const [chosenService, setChosenService] = useState({});

    useEffect(() => {
        const getAll = async () => {
            if(enterprise) {
                const services = await QuApiCalls.getServices('Migration Office');
                setServices(services);
            }
            else {
                const citi = await QuApiCalls.getCities();
                setCities(citi);
            }
        }
        getAll();
    }, [enterprise]);

    const reset = () => {
        setFacilities([]);
        setServices([]);
    }

    const classes = useStyles();

    const handleCityChange = async (event, value, reason) => {
        if(reason === 'select-option') {
            const facilities = await QuApiCalls.getFacilities(value);
            setFacilities(facilities.map(fac => {return {name: fac.name, id: fac.id}}));
        }
        else if(reason === 'clear') {
            reset();
        }
    }

    const handleFacilityChange = async (event, value, reason) => {
        if(reason === 'select-option') {
            const services = await QuApiCalls.getServices(value);
            const fac = facilities.find(f => f.name === value);
            setServices(services.map(srv => { return {name: srv.name, id: srv.id}}));
            setChosenService({...chosenService, facility: fac.id});
        }
        else if(reason === 'clear') {
            reset();
        }
    }

    const handleServiceChange = async (event, value, reason) => {
        if(reason === 'select-option') {
            const srv = services.find(s => s.name === value);
            setChosenService({...chosenService, service: srv.id});
        }
        else if(reason === 'clear') {
            reset();
        }
    }

    const handleClick = (event) => {
        const now = new Date();
        chosenService["timestamp"] = now.toISOString();
        handleSubmit(chosenService);
    }

    return (
        <div style={{paddingLeft: 200, paddingRight: 200}}>
            <Grid container justify="space-evenly" className="searchBar">
                { enterprise ? null : (
                <>
                    <Autocomplete 
                        id="tags-standard"
                        classes={{
                            inputRoot: classes.inputRoot,
                            input: classes.input
                        }}
                        style={ { width: 250, marginTop: 5, marginBottom: 5, border: 'none' }}
                        options={cities}
                        autoHighlight
                        onChange={handleCityChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Choose a city"
                                variant="outlined"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'city'
                                }
                                }
                            />
                        )}
                    />
                    <hr/>
                    <Autocomplete 
                        style={ { width: 250, marginTop: 5, marginBottom: 5 }}
                        options={facilities.map(fac => fac.name)}
                        classes={{
                            inputRoot: classes.inputRoot,
                            input: classes.input
                        }}
                        autoHighlight
                        onChange={handleFacilityChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Choose a facility"
                                variant="outlined"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'facility'
                                }
                                }
                            />
                        )}
                    />
                    <hr />
                    </>
                    )
                }
                <Autocomplete 
                    style={ { width: 250, marginTop: 5, marginBottom: 5 }}
                    options={services.map(srv => srv.name)}
                    classes={{
                        inputRoot: classes.inputRoot,
                        input: classes.input
                    }}
                    autoHighlight
                    onChange={handleServiceChange}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Choose a service"
                            variant="outlined"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'service'
                            }
                            }
                        />
                    )}
                />
                <hr />
                <Button
                    variant="contained"
                    color="secondary"
                    size="medium"
                    startIcon={<Search />}
                    style={{ borderRadius: 80, marginTop: 5, marginBottom: 5 }}
                    onClick={handleClick}
                >
                    Get in a queue
                </Button>            
            </Grid>
        </div>
    )
}

export default SearchBar;