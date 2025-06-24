INSERT INTO public.investments (
        id, 
        title, 
        short_description, 
        long_description, 
        funds_raised, 
        funds_target, 
        number_of_investors, 
        category,
        location,
        closing_date,
        problem_statement,
        solution_statement,
        use_of_funds, 
        customers
    )
    VALUES (
        gen_random_uuid(),
        'Investment 1',
        'Short description for investment 1',
        'Long description for investment 1',
        1000,
        50000,
        10,
        'Technology',
        'New York, USA',
        '2024-12-31',
        'Problem statement for investment 1',
        'Solution statement for investment 1',
        'Use of funds for investment 1',
        'Customers for investment 1'
    );