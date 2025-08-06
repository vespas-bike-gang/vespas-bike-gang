import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getEntriesByTitle } from '@/app/lib/contentful'

export const fetchData = createAsyncThunk('data/fetch', async () => {
    const response = await getEntriesByTitle({content_type: 'all', "fields.title": 'all'})
    return response.data
})

type Data = {
    data: any,
    error: string | null,
    loading: boolean
}

const initialState: Data = {
    data: null,
    error: null,
    loading: false
}

const dataSlice = createSlice({
    name: 'data',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.error = action.error.message || 'Error on loading data from Contentful'
                state.loading = false
            })
    }
})

export default dataSlice.reducer