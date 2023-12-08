import React from 'react'
import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import info from '../i18n/index'




describe('Module 4 Project Tests', () => {
  describe('English Language', () => {
		/*
      👉 TASK 1

      One test is done for you as an example.
    */
		test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      act(() => {
				render(<App lang='en' />);
			});
				expect(
					screen.getByText(info.en.TEXT_HEADING_CREATE_ACCOUNT)
				).toBeVisible();
		});

		//     "TEXT_FAV_LANG_JS": "JavaScript"
    test('TEXT_FAV_LANG_JS is visible', () => {
      act(() => {
				render(<App lang='en' />);
			});
      expect(screen.getByText(info.en.TEXT_FAV_LANG_JS)).toBeVisible();
    });

		//     "TEXT_FAV_LANG_RUST": "Rust",
    test('TEXT_FAV_LANG_RUST is visible', () => {
      act(() => {
				render(<App lang='en' />);
			});
			expect(screen.getByText(info.en.TEXT_FAV_LANG_RUST)).toBeVisible();
		});

		//     "TEXT_OPT_FAV_FOOD_1": "-- Select favorite food --",
    test('TEXT_OPT_FAV_FOOD_1 is visible', () => {
      act(() => {
				render(<App lang='en' />);
			});
			expect(screen.getByText(info.en.TEXT_OPT_FAV_FOOD_1)).toBeVisible();
		});

		//     "TEXT_OPT_FAV_FOOD_2": "Pizza",
    test('TEXT_OPT_FAV_FOOD_2 is visible', () => {
      act(() => {
				render(<App lang='en' />);
			});
			expect(screen.getByText(info.en.TEXT_OPT_FAV_FOOD_2)).toBeVisible();
		});

		//     "TEXT_OPT_FAV_FOOD_3": "Spaghetti",
    test('TEXT_OPT_FAV_FOOD_3 is visible', () => {
      act(() => {
				render(<App lang='en' />);
			});
			expect(screen.getByText(info.en.TEXT_OPT_FAV_FOOD_3)).toBeVisible();
		});

		//     "TEXT_OPT_FAV_FOOD_4": "Broccoli",
    test('TEXT_OPT_FAV_FOOD_4 is visible', () => {
      act(() => {
				render(<App lang='en' />);
			});
			expect(screen.getByText(info.en.TEXT_OPT_FAV_FOOD_4)).toBeVisible();
		});
    
		//     "TEXT_SUBMIT": "Send",
    test('TEXT_SUBMIT is visible', () => {
      act(() => {
				render(<App lang='en' />);
			});
			expect(screen.getByText(info.en.TEXT_SUBMIT)).toBeVisible();
		});
    
		//     "TEXT_FAV_LANG": "Favorite language:",
    test('TEXT_FAV_LANG is visible', () => {
      act(() => {
				render(<App lang='en' />);
			});
			expect(screen.getByText(info.en.TEXT_FAV_LANG)).toBeVisible();
		});

		//     "LABEL_USERNAME": "Username:",
    test('LABEL_USERNAME is correct', () => {
      act(() => {
				render(<App lang='en' />);
			});
			expect(screen.getByLabelText(info.en.LABEL_USERNAME)).toBeVisible();
		});

		//     "LABEL_FAV_FOOD": "Favorite food:",
    test('LABEL_FAV_FOOD is correct', () => {
      act(() => {
				render(<App lang='en' />);
			});
			expect(screen.getByLabelText(info.en.LABEL_FAV_FOOD)).toBeVisible();
		});

		//     "LABEL_ACCEPT_TERMS": "Agree to our terms",
    test('LABEL_ACCEPT_TERMS is visible', () => {
      act(() => {
				render(<App lang='en' />);
			});
			expect(screen.getByLabelText(info.en.LABEL_ACCEPT_TERMS)).toBeVisible();
		});

		//     "PLACEHOLDER_USERNAME": "Type username"
    test('PLACEHOLDER_USERNAME is visible', () => {
      act(() => {
				render(<App lang='en' />);
			});
			expect(screen.getByPlaceholderText(info.en.PLACEHOLDER_USERNAME)).toBeVisible();
		});    
	})
  // --------------------------------------------------------------------------------
  describe('Spanish Language', () => {
    /*
      👉 TASK 3

      This is done after making the UI multilingual.
    */
		test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      act(() => {
				render(<App lang='esp' />);
			});
        expect(
					screen.getByText(info.esp.TEXT_HEADING_CREATE_ACCOUNT)
				).toBeVisible();
		});

		//     "TEXT_FAV_LANG_JS": "JavaScript"
		test('TEXT_FAV_LANG_JS is visible', () => {
      act(() => {
				render(<App lang='esp' />);
			});
        expect(screen.getByText(info.esp.TEXT_FAV_LANG_JS)).toBeVisible();
		});

		//     "TEXT_FAV_LANG_RUST": "Rust",
		test('TEXT_FAV_LANG_RUST is visible', () => {
      act(() => {
				render(<App lang='esp' />);
			});
			expect(screen.getByText(info.esp.TEXT_FAV_LANG_RUST)).toBeVisible();
		});

		//     "TEXT_OPT_FAV_FOOD_1": "-- Select favorite food --",
		test('TEXT_OPT_FAV_FOOD_1 is visible', () => {
      act(() => {
				render(<App lang='esp' />);
			});
			expect(screen.getByText(info.esp.TEXT_OPT_FAV_FOOD_1)).toBeVisible();
		});

		//     "TEXT_OPT_FAV_FOOD_2": "Pizza",
		test('TEXT_OPT_FAV_FOOD_2 is visible', () => {
      act(() => {
				render(<App lang='esp' />);
			});
			expect(screen.getByText(info.esp.TEXT_OPT_FAV_FOOD_2)).toBeVisible();
		});

		//     "TEXT_OPT_FAV_FOOD_3": "Spaghetti",
		test('TEXT_OPT_FAV_FOOD_3 is visible', () => {
      act(() => {
				render(<App lang='esp' />);
			});
			expect(screen.getByText(info.esp.TEXT_OPT_FAV_FOOD_3)).toBeVisible();
		});

		//     "TEXT_OPT_FAV_FOOD_4": "Broccoli",
		test('TEXT_OPT_FAV_FOOD_4 is visible', () => {
      act(() => {
				render(<App lang='esp' />);
			});
			expect(screen.getByText(info.esp.TEXT_OPT_FAV_FOOD_4)).toBeVisible();
		});

		//     "TEXT_SUBMIT": "Send",
		test('TEXT_SUBMIT is visible', () => {
      act(() => {
				render(<App lang='esp' />);
			});
			expect(screen.getByText(info.esp.TEXT_SUBMIT)).toBeVisible();
		});

		//     "TEXT_FAV_LANG": "Favorite language:",
		test('TEXT_FAV_LANG is visible', () => {
      act(() => {
				render(<App lang='esp' />);
			});
			expect(screen.getByText(info.esp.TEXT_FAV_LANG)).toBeVisible();
		});

		//     "LABEL_USERNAME": "Username:",
		test('LABEL_USERNAME is correct', () => {
      act(() => {
				render(<App lang='esp' />);
			});
			expect(screen.getByLabelText(info.esp.LABEL_USERNAME)).toBeVisible();
		});

		//     "LABEL_FAV_FOOD": "Favorite food:",
		test('LABEL_FAV_FOOD is correct', () => {
      act(() => {
				render(<App lang='esp' />);
			});
			expect(screen.getByLabelText(info.esp.LABEL_FAV_FOOD)).toBeVisible();
		});

		//     "LABEL_ACCEPT_TERMS": "Agree to our terms",
		test('LABEL_ACCEPT_TERMS is visible', () => {
      act(() => {
				render(<App lang='esp' />);
			});
			expect(screen.getByLabelText(info.esp.LABEL_ACCEPT_TERMS)).toBeVisible();
		});

		//     "PLACEHOLDER_USERNAME": "Type username"
		test('PLACEHOLDER_USERNAME is visible', () => {
      act(() => {
				render(<App lang='esp' />);
			});
				expect(
					screen.getByPlaceholderText(info.esp.PLACEHOLDER_USERNAME)
				).toBeVisible();
		});  

  })
  describe('getEntriesByKeyPrefix', () => {
    test('can extract the correct data', () => {
    /*
      👉 TASK 4 part 2

      Implement the function `getEntriesByKeyPrefix` below
      and then come back here and write a few tests
      to ensure it works as expected.

      Although it should be noted that commonly,
      the tests are written _before_ implementing
      the function being tested.
    */
    })
  })
})
function getEntriesByKeyPrefix(obj, keyPrefix) {
  /*
    👉 TASK 4 part 1

    Implement a function that takes as first argument an object `obj` such as this:

    {
      abc_1: "data_abc_1",
      abc_2: "data_abc_2",
      xyz_1: "data_xyz_1",
      abc_3: "data_abc_3",
    }

    and takes as second argument a string `keyPrefix` such as this: "abc"

    and returns an array of arrays such as this (for the arguments given in the examples above):

    [
      ["abc_1", "data_abc_1"],
      ["abc_2", "data_abc_2"],
      ["abc_3", "data_abc_3"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "xyz" then it would return:

    [
      ["xyz_1", "data_xyz_1"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "foo" then it would return the empty array.

    The function looks inside the object `obj`, finds all properties whose property names begin
    with the `keyPrefix` given (followed by an underscore), and reorganizes the information before returning it.
    The properties that match the `keyPrefix` are returned inside an array holding key-value-pair sub-arrays.

  */
}
