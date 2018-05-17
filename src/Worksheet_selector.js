import React, { Component } from 'react';
import { render } from 'react-dom';

export default function WorksheetSelector(props) {

    // Load groups
    let groupsList = [
        'homelike_place',
        'hospital_friends',
        'fab_friends',
        'ponyrz'
    ]


    let groups = {
        'homelike_place': {},
        'hospital_friends': {},
        'fab_friends': {},
        'ponyrz': {}
    };

    // Get groups from VK
    VK.Api.call('groups.getById', {group_ids: groups.join(","), fields: 'members_count', v:"5.73"}, function(res) {

        if(!res.response) {
            alert("Информация о группах не была получена...");
            return false;
        }

        if (res.response.length != groupsList.length) return false;

        // Pull up 'groups'
        for (var i = 0; i < groupsList.length; ++i) {
            groups[groupsList[i]] = {
                'name': res.response[i].name,
                'photo_url': res.response[i].photo_100,
                'members_count': res.response[i].members_count,
                'is_selected': false
            };
        }
        console.log(res.response);
    });

    const guiList = groupsList.map((element) =>
    <li>
        <input type="checkbox" onClick={
            () => {
                groups[element].is_selected = true;
            }
        }/>
        <image src={groups[element].photo_url} />
        {element}
    </li>
    );

    return (
        <div>
            <h1>Выберите группы</h1>
            <div>
                {guiList}
            </div>

            <h1>Выберите свой город</h1>

            <button>Next step</button>
        </div>
    );
}
