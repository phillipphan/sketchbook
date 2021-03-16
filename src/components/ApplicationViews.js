import React from "react"
import { Route } from "react-router-dom"
import { GridProvider } from "./grid/GridProvider"
import { Sketch } from "./sketch/Sketch"
import { SketchProvider } from "./sketch/SketchProvider"
import { SketchBook } from "./sketchbook/SketchBook"

export const ApplicationViews = () => {
  return (
    <GridProvider>
    <SketchProvider>
      <Route exact path="/sketch">
        <Sketch />
      </Route>

      <Route exact path="/sketchbook">
        <SketchBook />
      </Route>

      <Route exact path="/sketch/edit/:sketchId(\d+)">
        <Sketch />
      </Route>
    </SketchProvider>
    </GridProvider>
  )
}