import { nanoid } from "nanoid";

export default [    
    {
        "id": nanoid(),
        "name": "To Do",
        "cards": [
            {
                "id": nanoid(),
                "title": "Helpdesk Call AA999",
                "label": "CP",
                "comment": "1",
                "tasks": "0/3"
            },
            {
                "id": nanoid(),
                "title": "Helpdesk Call BB999",
                "label": "CP"
            },
        ]
    },
    {
        "id": nanoid(),
        "name": "Development",
        "cards": [
            {
                "id": nanoid(),
                "title": "Helpdesk Call CC999",
                "label": "Fault",
                "likes": "1"
            },
            {
                "id": nanoid(),
                "title": "Helpdesk Call EE999",
                "label": "CP"
            }
        ]
    },
    {
        "id": nanoid(),
        "name": "Testing",
        "cards": [
            {
                "id": nanoid(),
                "title": "Helpdesk Call DD999",
                "label": "Fault"
            }
        ]
    },
    {
        "id": nanoid(),
        "name": "Done",
        "cards": [
            {
                "id": nanoid(),
                "title": "Helpdesk Call FF999",
                "label": "CP"
            },
            {
                "id": nanoid(),
                "title": "Helpdesk Call GG999",
                "label": "Fault"
            }
        ]
    }
]